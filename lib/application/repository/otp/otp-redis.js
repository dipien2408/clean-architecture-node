const { redisInstance, redisKey } = require("../../utils/redis");

const OTP_EXPIRE = global.gConfig.sms.otp_expire;
const OTP_LENGTH = global.gConfig.sms.otp_length;

const otpKey = (phone) => redisKey.OTP_REDIS_KEY + phone;

function genOtp() {
  var str = Math.random().toString();
  return str.substr(str.length - OTP_LENGTH);
}

async function saveOtp(phone, otp) {
  return await redisInstance.set(otpKey(phone), otp, { EX: OTP_EXPIRE });
}

async function getOtp(phone) {
  return await redisInstance.get(otpKey(phone));
}

async function delOtp(phone) {
  return await redisInstance.del(otpKey(phone));
}

async function verifyOtp(phone, otp) {
  const redisOTP = await getOtp(phone);
  if (redisOTP === otp) return true;
  return false;
}

module.exports = {
  genOtp,
  otpKey,
  saveOtp,
  getOtp,
  verifyOtp,
  delOtp,
};
