import { InMemoryDbService } from 'angular-in-memory-web-api';
import { createTestCustomers} from './test-data';

//a fake database define the data
export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const states = ['Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland',
            'Nova Scotia',
            'Ontario',
            'Prince Edward Island',
            'Quebec',
            'Saskatchewan'];
        
        return { customers: createTestCustomers(),
            states 
        };
    }
}