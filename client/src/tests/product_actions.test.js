import { brandy, brandy2 } from '../actions/product_actions';

test('this function returns an array of all brand in database', () => {
    const result = brandy();
    expect(result).toEqual({
        type:"brandyYeah",
        payload:{}
    });
})


test('expect to return a promise of true', () => {
    expect.assertions(1);
   return brandy2(1).then((data) => {
       expect(data).toEqual({
           sucess:true
       })
   })
})

test('expect to return a promise of false', () => {
    expect.assertions(1);
   return brandy2(2).catch(e => expect(e).toMatch("error"));  
   })



   function forEachExample(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }

  const steven = [
      1,2,3,4,5
  ];

  const webster = [];

  forEachExample(steven, (inditem) => {
            webster.push(inditem + 5);
  })

  console.log(webster);
  