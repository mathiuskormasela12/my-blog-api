// ========== Auth Controller
// import all modules
import { Controller } from "@tsed/di";
import { Post } from "@tsed/schema";
import { AuthService } from "src/services/api/v1/AuthService";

@Controller("/auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/register")
  public register() {
    return this.authService.register();
  }
}
