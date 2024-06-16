import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class UserSetting {
    @Prop({required: true})
    address: string
    @Prop({required: true})
    url: string
}

export const UserSettingsSchema = SchemaFactory.createForClass(UserSetting);
