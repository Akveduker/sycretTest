import { storageNames } from "constants/storage/storageNames";
import { removePhoneSpecChars } from "utils/phone/removePhoneSpecChars";

export const createPaymentBody = () => {
  const userData = JSON.parse(localStorage.getItem(storageNames.userData));
  const { currentCertificate } = JSON.parse(
    localStorage.getItem(storageNames.certificateState)
  );
  const body = {
    Id: currentCertificate["ID"],
    TableName: currentCertificate["TABLENAME"],
    PrimaryKey: currentCertificate["PRIMARYKEY"],
    Price: currentCertificate["PRICE"],
    Summa: currentCertificate["SUMMA"],
    ClientName: userData["name"],
    Phone: removePhoneSpecChars(userData["phone"]),
    Email: userData["email"],
    PaymentTypeId: 2,
    UseDelivery: 0,
    IsGift: 0,
    MsgText: "",
    PName: "",
    PPhone: "",
  };
  return body;
};
