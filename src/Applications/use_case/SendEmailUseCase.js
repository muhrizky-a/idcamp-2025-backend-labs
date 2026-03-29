class SendEmailUseCase {
  constructor({
    mailer,
  }) {
    this._mailer = mailer;
  }

  async execute(useCasePayload) {
    const { email, token } = useCasePayload;

    //TODO: lengkapi usecase
    //END TODO
  }
}

export default SendEmailUseCase;
