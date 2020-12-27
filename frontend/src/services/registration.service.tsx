import { EntryModel } from "../constants/interfaces";
import http from "../http-common";

class RegistrationDataService {
  getAll() {
    return http.get("/registration");
  }

  get(vehicalNo: string) {
    return http.get(`/registration/vehical/${vehicalNo}`);
  }

  create(data: EntryModel) {
    return http.post("/registration", data);
  }
}

export default new RegistrationDataService();
