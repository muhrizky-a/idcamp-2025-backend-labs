import AddUserUseCase from '../../../../Applications/use_case/AddUserUseCase.js';

class AuthController {
  constructor(container) {
    this._container = container;

    this.postUser = this.postUser.bind(this);
  }

  async postAuth(req, res) {
    //TODO: ubah controller sesuai usecase nya
    // END TODO
    const addUserUseCase = this._container.getInstance(AddUserUseCase.name);
    const addedUser = await addUserUseCase.execute(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        addedUser,
      },
    });
  }

  async verifyAuth(req, res) {
    //TODO: lengkapi controller
    // END TODO
  }
}

export default AuthController;
