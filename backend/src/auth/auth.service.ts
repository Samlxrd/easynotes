import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async signIn(username: string, pass: string): Promise<{acess_token: string}> {
        const user = await this.userService.getUserByUsername(username);
        //const hash = await bcrypt.hash(pass, 10);

        if (!user) {
            throw new UnauthorizedException();
        }

        const isMatch = await bcrypt.compare(pass, user.password);

        if (!isMatch) {
            throw new UnauthorizedException();
        }
        
        const payload = { id: user.id, username: user.username };
        return {
            acess_token: await this.jwtService.signAsync(payload),
        };
    }
}
