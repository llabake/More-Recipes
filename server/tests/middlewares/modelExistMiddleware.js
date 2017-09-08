// import { Recipe } from '../../models/recipe';

// const chai = require('chai');

// const expect = chai.expect;

// // const doBeforeAll = () => {
// //   before((done) => {
// //     models.Users.destroy({
// //       cascade: true,
// //       truncate: true,
// //       restartIdentity: true
// //     });
// // }

// // beforeEach((done) => {
// //   Users
// //     .destroy({ where: {} })
// //     .then(() => Users.create({
// //       name: 'John',
// //       email: 'john@mail.net',
// //       password: '12345'
// //     }))
// //     .then((user) => {
// //       token = jwt.encode({ id: user.id }, jwtSecret);
// //       done();
// //     });
// // });

// describe('Middlewares', () => {
//   describe('model Exist:', () => {
//     //   const User = models.User;
//     beforeEach((done) => {
//       // Runs before each test...
//       Recipe
//         .destroy({ where: {} })
//         .then(() => Recipe.create({
//           title: 'Ofada Rice',
//           image: 'rice',
//           direction: 'wash rice\nboil water\nstir rice',
//           ingredients: 'rice\nwater\nsalt',
//           userId: '4'
//         }))
//         .then(() => done());
//     });

//     { it('it should return recipe not found', () =>
//       request.post('/')
//         .expect(404)
//         .end((err, res) => {
//           expect(res.body).to.eql({ message: 'Recipe not found' });
//         })

//     ); }
//     });
// });
