import { UserDomainModel } from 'domain.types/user/user.domain.model';
import { injectable } from 'tsyringe';

@injectable()
export class UserService {
    create = async (userDetails: UserDomainModel) => {
        const servicceResponse = {
            name: 'akash jadhav',
            designation: 'software dev',
        };

        return servicceResponse;
    };
}
