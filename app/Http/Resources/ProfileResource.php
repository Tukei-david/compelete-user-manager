<?php

namespace App\Http\Resources;

use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Http\Resources\Json\JsonResource;

class ProfileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'cover_photo' => $this->cover_photo ? URL::to($this->cover_photo) : null,
            'birthday_date' => $this->birthday_date,
            'gender' => $this->gender,
            'street_address' => $this->street_address,
            'zip_code' => $this->zip_code,
            'country' => $this->country,
            'province' => $this->province,
            'created_at' => (new DateTime($this->created_at))->format('Y-m-d H:i:s'),
            'updated_at' => (new DateTime($this->updated_at))->format('Y-m-d H:i:s'),
        ];
    }
}
