/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  getUsers: async (req, res) => {

    res.ok({
      success: true,
      user: [{id:1, name:'jon Doe'}, {id:2, name: 'John Wick'}]
    });
  }
};

