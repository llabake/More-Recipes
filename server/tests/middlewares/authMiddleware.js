
// // import models from '../server/models';

// // const doBeforeAll = () => {
// //   before((done) => {
// //     models.Users.destroy({
// //       cascade: true,
// //       truncate: true,
// //       restartIdentity: true
// //     });

// import { User } from '../../models/user';

// describe('Routes: Token', () => {
// //   const User = models.User;
//   describe('POST /token', () => {
//     beforeEach((done) => {
//       // Runs before each test...
//       User
//         .destroy({ where: {} })
//         .then(() => User.create({
//           username: 'Johnny',
//           firstName: 'John',
//           lastName: 'Smith',
//           email: 'john@mail.net',
//           password: '12345',
//         }))
//         .then(() => done());
//     });
//     describe('status 200', () => {
//       it('returns authenticated user token', (done) => {
//         // Test's logic...
//         request.post('/api/v1/users/signin')
//           .send({
//             username: 'Johnny',
//             password: '12345'
//           })
//           .expect(200)
//           .end((err, res) => {
//             expect(res.body).to.include.keys('token');
//             done(err);
//           });
//       });
//     });
//     describe('status 401', () => {
//       it('throws error when password is incorrect', (done) => {
//         // Test's logic...
//       });
//       it('throws error when email not exist', (done) => {
//         // Test's logic...
//       });
//       it('throws error when email and password are blank', (done) => {

//         // Test's logic...
//       });
//     });
//   });
// });
