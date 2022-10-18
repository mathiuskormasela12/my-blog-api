// ========== AuthService
// import all modules
import { Service } from "@tsed/di";

@Service()
export class AuthService {
  public register() {
    return {
      message: "Test"
    };
  }
}
