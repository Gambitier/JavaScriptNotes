import { UserDomainModel } from 'domain.types/user/user.domain.model';
import { UserDetailsDto } from 'domain.types/user/user.dto';
import { inject, injectable } from 'tsyringe';
import { IUserRepo } from '../database/repository.interfaces/user.repo.intrerface';

@injectable()
export class UserService {
    constructor(@inject('IUserRepo') private _userRepo: IUserRepo) {}

    create = async (userDetails: UserDomainModel): Promise<UserDetailsDto> => {
        const userDetailsDto: UserDetailsDto = await this._userRepo.createUser(userDetails);

        return userDetailsDto;
    };
}
