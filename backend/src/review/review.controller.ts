import { Controller, Get, Param, NotFoundException, Post, Body, Put, Patch, Delete } from '@nestjs/common';
import { ReviewsService } from './review.service';
import { Review } from './entities/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';


@Controller('api/reviews')
export class ReviewsController {
  constructor(private readonly userService: ReviewsService) {}

  @Get()
  async findAll(): Promise<Review[]> {
    return this.userService.findAll();
  }
  @Get(':userId/:breweryId')
  async findByUserIdAndBreweryId(@Param('userId') userId: string, @Param('breweryId') breweryId: string): Promise<Review | null> {
    return this.userService.findByUserIdAndBreweryId(userId, breweryId);
  }
  @Get(':breweryId')
  async findByBreweryId(@Param('breweryId') breweryId: string): Promise<Review[]> {
    return this.userService.findByBreweryId(breweryId);
  }

  @Post(':userId/:breweryId') // Route parameters
  async create(
    @Body() review: Review,
    @Param('userId') userId: string,
    @Param('breweryId') breweryId: string,
  ): Promise<Review> {
    // Add userId and breweryId to the review object
    review.userId = userId;
    review.breweryId = breweryId;
    
    return this.userService.create(review);
  }
  @Patch(':userId/:breweryId')
  async update(
    @Param('userId') userId: string,
    @Param('breweryId') breweryId: string,
    @Body() updateDto: Partial<Review>,
  ): Promise<Review | null> {
    return this.userService.update(userId, breweryId, updateDto);
  }
}

  

