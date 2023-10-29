import dbConnect from "./mongodb";
import OTP from "@/models/OTP";

export const storeOTP = async (email: string, otp: string) => {
  try {
    await dbConnect();
    const saveOTP = await OTP.create({
      email,
      otp,
    });

    saveOTP.save();
  } catch (error) {
    throw new Error("couldnt save otp");
  }
};
// export const checkOTP = async (email: string, valueEntered: string) => {
  // await dbConnect();
  // const isExist = await OTP.findOne({
  //   email,
  // });

  // const authStat = isExist !== null && isExist.otp === valueEntered ? true : false;
  // return true;
// };
export const removeOTP = async (email: string) => {
  // after storing fire 30 sec timer to delete otp
  let timer = setInterval(async () => {
    await dbConnect();
    await OTP.deleteOne({
      email,
    });
  }, 6000);

  clearInterval(timer);
};
