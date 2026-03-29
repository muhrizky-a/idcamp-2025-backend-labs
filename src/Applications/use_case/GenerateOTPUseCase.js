import CreateUserVerification from "../../Domains/user_verifications/entities/CreateUserVerification";

class GenerateOTPUseCase {
  constructor({
    userVerificationRepository,
    tokenGenerator,
  }) {
    this._userVerificationRepository = userVerificationRepository;
    this._tokenGenerator = tokenGenerator;
  }

  async execute(useCasePayload) {
    const { userId } = useCasePayload;
    const token = this._generateToken();

    const createUserVerification = new CreateUserVerification({
      userId,
      token,
    });

    await this._userVerificationRepository.addToken(createUserVerification);
  }

  _generateToken() {
    return this._tokenGenerator();
  }
}

export default GenerateOTPUseCase;
