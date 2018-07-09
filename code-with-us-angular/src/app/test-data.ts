export function createTestCustomers(){
    return [
        {
            id: 1,
            name: 'Naihe Feng',
            address:{
              street : '383 Albert',
              city : 'Waterloo',
              state:'ON',
              region: 'West',
            }   
          },
          {
            id: 2,
            name: 'Boran Wang',
            address:{
              street : '465 Beechwood Place',
              city : 'Toronto',
              state:'AB',
              region: 'South',
            }   
          },
          {
            id: 3,
            name: 'Wenjing Chen',
            address:{
              street : '383 Albert',
              city : 'AnyTown',
              state:'BC',
              region: 'North',
            }   
          },
          {
          id: 4,
            name: 'Wei Du',
            address:{
              street : '123 Main',
              city : 'Montreal',
              state:'Quebec',
              region: 'East',
            }
        }
    ];
}