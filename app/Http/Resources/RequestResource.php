<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RequestResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=> $this->id,
            // 'user_id'=> $this->user_id,
            'created_by' => new UserResource($this->user),
            'item_name' => $this->item_name,
            'description' => $this->description,
            'quantity' => $this->quantity,
            'status' => $this->status,
            'forward_to_purchaser'=> $this->forward_to_purchaser,
            'forward_to_requester'=> $this->forward_to_requester,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at' => (new Carbon($this->updated_at))->format('Y-m-d')
        ];
    }
}
