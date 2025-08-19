import dotenv from 'dotenv';
import { S3Client } from '@aws-sdk/client-s3';

dotenv.config();

// Allowed file types
const acceptsObj = {
  image: ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml", "image/x-icon"],
  audio: ["audio/mpeg", "audio/ogg", "audio/wav", "audio/webm"],
  video: ["video/mp4", "video/webm"],
  documents: [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "text/plain"
  ],
  compressed: ["application/zip", "application/gzip"],
  coding: [
    "text/javascript",
    "text/html",
    "text/css",
    "application/json",
    "application/xml",
    "text/x-python",
    "text/x-java-source",
    "text/x-c",
    "text/x-c++",
    "text/x-php",
    "text/x-shellscript"
  ],
  other: ["application/octet-stream"]
};

const allowedFileTypes = Object.values(acceptsObj).flat();
const fileSizeLimitInMB = 20;

// Check if AWS credentials are set
const awsEnabled =
  process.env.AWS_ACCESS_KEY_ID &&
  process.env.AWS_SECRET_ACCESS_KEY &&
  process.env.AWS_REGION &&
  process.env.S3_BUCKET_NAME;

let s3Client = null;

if (awsEnabled) {
  s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
  });
  console.log("AWS S3 client configured");
} else {
  console.log(
    "AWS credentials missing. S3 client not configured. Skipping AWS S3 integration."
  );
}

export default {
  s3Client,
  awsEnabled,
  allowedFileTypes,
  fileSizeLimitInMB
};
