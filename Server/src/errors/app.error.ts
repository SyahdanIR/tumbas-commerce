import type { ContentfulStatusCode } from "hono/utils/http-status";

export class AppError extends Error {
  statusCode: ContentfulStatusCode;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode as any;
  }
}
