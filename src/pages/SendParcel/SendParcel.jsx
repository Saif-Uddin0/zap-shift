import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

export default function SendParcel() {
  const { handleSubmit, register, control, 
    // formState: { errors } 
  } = useForm();
  const { user } = useAuth();
  console.log(user);
  

  const axiosSecure = useAxiosSecure();
  const data = useLoaderData();
  // find the single region
  const regionDuplicated = data.map(c => c.region)
  const region = [...new Set(regionDuplicated)]


  // observer when chnage the region immedately chage the district
  const senderRegion = useWatch({ control, name: 'senderRegion' })
  const receiverRegion = useWatch({ control, name: 'receiverRegion' })

  // district by region
  const districtByRegion = region => {
    const regionDistrict = data.filter(c => c.region === region);
    const district = regionDistrict.map(d => d.district)
    return district;
  }






  const handleSendParcel = data => {
    console.log(data);

    // alert("Form submitted successfully!");
    const isDocument = data.percelType === 'document';
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight)
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;

    }
    else {
      if (parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      }
      else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    // console.log('cost', cost);
    const percelData ={
      ...data , cost,
      email: user?.email,
      bookingDate: new Date()
    }

    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I'm Agree!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post('/percels' , percelData)
        .then(res => {
          console.log(res.data);
          
        })
        Swal.fire({
          title: "Success!",
          text: "Your percel data has been Transfer to our Team.",
          icon: "success"
        });
      }
    });

  };

  return (
    <section className="bg-white rounded-2xl shadow-md py-15 px-10 md:px-20 container mx-auto my-20 border border-gray-100">
      {/* Title */}
      <h2 className="text-5xl font-semibold text-primary mb-2">Send A Parcel</h2>
      <p className="text-base-300 text-lg font-bold mb-8">Enter your parcel details</p>

      <form onSubmit={handleSubmit(handleSendParcel)}>
        {/* Parcel Type */}
        <div className="flex gap-6 mb-8 items-center">
          <label className="flex items-center gap-2 text-primary cursor-pointer">
            <input
              type="radio"
              value="document"
              {...register('percelType')}
              className="text-base-200 focus:ring-green-400"
            />
            Document
          </label>
          <label className="flex items-center gap-2 text-primary cursor-pointer">
            <input
              type="radio"
              defaultChecked
              value="non-document"
              {...register('percelType')}
              className="text-base-200 focus:ring-green-400"
            />
            Non-Document
          </label>
        </div>

        {/* Parcel Details */}

        {/* percel Name */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div>
            <label htmlFor="parcelName" className="block text-primary mb-2">
              Parcel Name
            </label>
            <input
              id="parcelName"
              {...register('parcelName')}
              type="text"
              placeholder="Parcel Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
            />
          </div>
          <div>

            {/* percel waight */}
            <label htmlFor="parcelWeight" className="block text-primary mb-2">
              Parcel Weight (KG)
            </label>
            <input
              id="parcelWeight"
              {...register('parcelWeight')}
              type="number"
              placeholder="Parcel Weight (KG)"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
            />
          </div>
        </div>

        {/* Sender & Receiver Details */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Sender */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Sender Details
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="senderName" className="block text-primary mb-2">
                  Sender Name
                </label>
                <input
                  id="senderName"
                  {...register('senderName')}
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Sender Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="senderAddress" className="block text-primary mb-2">
                  Address
                </label>
                <input
                  id="senderAddress"
                  {...register('senderAddress')}
                  type="text"
                  placeholder="Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="senderPhone" className="block text-primary mb-2">
                  Sender Phone No
                </label>
                <input
                  id="senderPhone"
                  {...register('senderPhone')}
                  type="text"
                  placeholder="Sender Phone No"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="senderRegion" className="block text-primary mb-2">
                  Sender Region
                </label>
                <select
                  id="senderRegion"
                  {...register('senderRegion')}
                  className="select w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                >
                  <option>Select your Region</option>
                  {region.map((r, i) => <option key={i} value={r}>{r}</option>)}

                </select>
              </div>


              <div>
                <label htmlFor="senderDistrict" className="block text-primary mb-2">
                  District
                </label>
                <select
                  id="senderDistrict"
                  {...register('senderDistrict')}
                  className="select w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                >
                  <option>Select your district</option>
                  {
                    districtByRegion(senderRegion).map((d, i) =>
                      <option key={i} value={d}>{d}</option>
                    )
                  }

                </select>
              </div>

              <div>
                <label htmlFor="pickupInstruction" className="block text-primary mb-2">
                  Pickup Instruction
                </label>
                <textarea
                  id="pickupInstruction"
                  {...register('pickupInstruction')}
                  rows={2}
                  placeholder="Pickup Instruction"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Receiver */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Receiver Details
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="receiverName" className="block text-primary mb-2">
                  Receiver Name
                </label>
                <input
                  id="receiverName"
                  {...register('receiverName')}
                  type="text"
                  placeholder="Receiver Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="receiverAddress" className="block text-primary mb-2">
                  Receiver Address
                </label>
                <input
                  id="receiverAddress"
                  {...register('receiverAddress')}
                  type="text"
                  placeholder="Receiver Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="receiverContact" className="block text-primary mb-2">
                  Receiver Contact No
                </label>
                <input
                  id="receiverContact"
                  {...register('receiverContact')}
                  type="text"
                  placeholder="Receiver Contact No"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="receiverRegion" className="block text-primary mb-2">
                  Receiver Region
                </label>
                <select
                  id="receiverRegion"
                  {...register('receiverRegion')}
                  className="select w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                >
                  <option>Select your Region</option>
                  {region.map((r, i) => <option key={i} value={r}>{r}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="receiverDistrict" className="block text-primary mb-2">
                  District
                </label>
                <select
                  id="reciverDistrict"
                  {...register('receiverDistrict')}
                  className="select w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                >
                  <option>Select your district</option>
                  {
                    districtByRegion(receiverRegion).map((d, i) =>
                      <option key={i} value={d}>{d}</option>
                    )
                  }

                </select>
              </div>

              <div>
                <label htmlFor="deliveryInstruction" className="block text-primary mb-2">
                  Delivery Instruction
                </label>
                <textarea
                  id="deliveryInstruction"
                  {...register('deliveryInstruction')}
                  rows={2}
                  placeholder="Delivery Instruction"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-base-200 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pickup Info */}
        <p className="text-gray-600 text-sm mt-8 mb-4">
          ⏱ Pickup Time 4pm–7pm Approx
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-secondary hover:bg-green-400 text-primary font-medium px-8 py-3 rounded-md transition"
        >
          Proceed to Confirm Booking
        </button>
      </form>
    </section>
  );
}
