import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getScreenDetails,
  windowDetails,
  getGovClientDeviceID
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;

exports.getScreenDetails = getScreenDetails;
exports.windowDetails = windowDetails;

exports.getGovClientDeviceID = getGovClientDeviceID;