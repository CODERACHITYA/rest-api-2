import Joi from 'joi'
import { emit } from 'nodemon'
const registers = {
  async register(req, res , next) {
    // [-] All Checklist
    // [+] Validate the request
    const Schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        repeatpassword: Joi.ref('password')
    })
    const { error } = Schema.validate(req.body);
    if(error){
        return next(error);
    }
    res.json({OK: "ALL OK"})
    // [+] authorise the request
    // [-] Check if the user is in the database alerady or not
    try {
      const exist = await User.exist({ email: req.body.email });
      if(exist){
        return next();
      }
    } catch(err) {
      return next(error);
    }
    // [-] Prepare a model
    // [-] Store in database
    // [-] Genrate a JWT token
    // [-] Send Response
  }
}
export default registers