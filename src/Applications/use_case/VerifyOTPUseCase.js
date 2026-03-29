class VerifyOTPUseCase {
  constructor({
    userVerificationRepository,
    authenticationTokenManager,
  }) {
    this._userVerificationRepository = userVerificationRepository;
    this._authenticationTokenManager = authenticationTokenManager;
  }

  async execute(useCasePayload) {
    const { userId } = useCasePayload;

    //TODO: lengkapi verifikasi OTP
    // END TODO

    const accessToken = await this._authenticationTokenManager.createAccessToken({ username });

    const newAuthentication = new NewAuthentication({
      accessToken,
    });

    return newAuthentication;
  }

}

export default VerifyOTPUseCase;
