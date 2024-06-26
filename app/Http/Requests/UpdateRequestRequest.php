<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRequestRequest extends FormRequest
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
            "item_name" => ["required" , "max:255"],
            "description" => ["nullable","string"],
            "quantity" => ["required" , "integer" ],
            'status' => ['required', Rule::in(['fulfilled','accepted','inprogress','pending','stalled','rejected'])],
            "forward_to_requester" => ["nullable","boolean"],
            "forward_to_purchaser" => ["nullable","boolean"],

        ];
        // ['fulfilled','accepted','inprogress','pending','stalled','rejected']
    }
}
