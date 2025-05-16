/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsInt, IsOptional, IsString } from 'class-validator';

export class OrthographyDto {
  @IsString()
  readonly promp: string;

  @IsInt()
  @IsOptional()
  readonly maxTokens?: number;
}
