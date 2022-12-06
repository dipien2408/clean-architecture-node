module.exports = {
  SUCCESS: { code: 1, sys_message: "SUCCESS", message: "Thành công" },
  SESSION_TIMEOUT: {
    code: -15,
    sys_message: "SESSION_TIMEOUT",
    message: "Đăng nhập hết hạn",
  },
  SYSTEM_ERROR: {
    code: -900,
    sys_message: "SYSTEM_ERROR",
    message: "Hệ thống có lỗi, vui lòng thử lại sau!",
  },
  INVALID_PRODUCT: {
    code: -901,
    sys_message: "INVALID_PRODUCT",
    message: "Mã sản phẩm không hợp lệ",
  },
  INVALID_PHONE: {
    code: -301,
    sys_message: "INVALID_PHONE",
    message: "Số điện thoại không hợp lệ",
  },
  INVALID_OTP: {
    code: -302,
    sys_message: "INVALID_OTP",
    message: "Mã xác nhận một lần không hợp lệ",
  },
  INCORRECT_OTP: {
    code: -303,
    sys_message: "INCORRECT_OTP",
    message: "Mã xác nhận không chính xác hoặc đã hết hạn",
  },
  MAX_OTP_IN_DAY: {
    code: -304,
    sys_message: "MAX_OTP_IN_DAY",
    message: "Bạn đã vượt quá số lần nhận SMS trong ngày",
  },
  NOT_FOUND: {
    code: -400,
    sys_message: "NOT_FOUND",
    message: "Không tìm thấy dữ liệu",
  },
  DATA_EXIST: {
    code: -401,
    sys_message: "DATA_EXIST",
    message: "Dữ liệu đã tồn tại",
  },
  INVALID_TOKEN: {
    code: -402,
    sys_message: "INVALID_TOKEN",
    message: "Dữ liệu xác thực không hợp lệ",
  },
  EMPTY_MEMBER: {
    code: -403,
    sys_message: "EMPTY_MEMBER",
    message: "Không thể tạo nhóm vì không có thành viên!",
  },
  PERMISSION_DENY: {
    code: -405,
    sys_message: "PERMISSION_DENY",
    message: "Từ chối truy cập",
  },
  LOGIN_ERROR: {
    code: -406,
    sys_message: "LOGIN_ERROR",
    message: "Đăng nhập không thành công, không tìm thấy thông tin người dùng!",
  },
  INACTIVE_ACCOUNT_ERROR: {
    code: -407,
    sys_message: "INACTIVE_ACCOUNT_ERROR",
    message: "Tài khoản đã bị khóa!",
  },
};
