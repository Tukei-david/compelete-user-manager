<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileIntroController extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'cover_photo' => ['nullable', 'string'],
            'image' => ['nullable', 'string'],
            'name' => ['nullable', 'max:55'],
            'sub_title' => ['nullable', 'max:150'],
            'street_address' => ['nullable'],
            'zip_code' => ['nullable'],
            'country' => ['nullable'],
            'province' => ['nullable'],
            'city' => ['nullable'],
            'gender' => ['nullable']
        ];
    }
}
