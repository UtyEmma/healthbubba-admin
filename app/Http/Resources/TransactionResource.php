<?php

namespace App\Http\Resources;

use App\Enums\Role;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
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
            'no' => $this->no,
            'amount' => $this->amount,
            'status' => $this->status,
            'reference' => $this->transaction_reference,
            'type' => $this->transaction_type,
            'model_id' => $this->model_id,
            'date' => $this->created_at?->toDayDateTimeString(),
            'user' => $this->type == Role::PATIENT ? new PatientResource($this->patient) : new PractitionerResource($this->patient),
            'appointment' => new AppointmentResource($this->whenLoaded('appointment')),
            'tests' => $this->test ? new TestResource($this->test) : null,
            'medication' => $this->medication ? new MedicationResource($this->medication) : null,
            'owner_id' => $this->test?->id ?? $this->medication?->id ?? $this->appointment?->id,
        ];
    }
}
