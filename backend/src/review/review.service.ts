import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
  service: any;
  constructor(public dto: DataSource) {
    this.service = this.dto.getRepository(Review);
  }
  async findAll(): Promise<Review[]> {
    return this.service.find();
  }
  async findByUserIdAndBreweryId(
    userId: string,
    breweryId: string,
  ): Promise<Review | null> {
    return this.service.findOne({ where: { userId, breweryId } });
  
}
  async findByBreweryId(breweryId: string): Promise<Review[]> {
    return this.service.find({ where: { breweryId } });
}

async create(review: Review): Promise<Review> {
  return this.service.save(review);
}
async update(userId: string, breweryId: string, updateDto: Partial<Review>): Promise<Review | null> {
  const existingReview = await this.service.findOne({ where: { userId, breweryId } });
  if (existingReview) {
    return this.service.update(existingReview,updateDto);
  }
  return undefined;
}
}
