import { IsString, IsEmail, IsNotEmpty} from '@nestjs/class-validator';

export class CreateItemDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}