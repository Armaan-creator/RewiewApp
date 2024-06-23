import { IsNumber, IsString, Length } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  userId: string;

  @IsString()
  breweryId: string;

  @IsString()
  @Length(1, 500)
  review: string;
  @IsNumber()
  @Length(1-5)
  rating:number;
}
