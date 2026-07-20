import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudinary
            required: [true, "Video file is required"],
        },
        thumbnail: {
            type: String,
            required: [true, "Video thumbnail is required"],
        },
        title: {
            type: String,
            required: [true, "Video title is required"],
        },
        description: {
            type: String,
            required: [true, "Video description is required"],
        },
        duration: {
            type: Number,
            required: true,
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
