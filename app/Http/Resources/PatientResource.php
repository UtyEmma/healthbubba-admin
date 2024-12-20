<?php

namespace App\Http\Resources;

use App\Enums\Status;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PatientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array {
        $appointments = $this->patientAppointments;

        return [
            'no' => $this->no,
            'id' => $this->id,
            'picture' => $this->picture,
            'email' => $this->email,
            'full_name' => $this->fullname,
            'phone' => $this->phone,
            'dob' => $this->dob,
            'sex' => $this->sex,
            'phone' => $this->phone,
            'weight' => $this->weight,
            'title' => $this->title,
            'status' => $this->status(),
            'is_active' => $this->is_active,
            'appointments' => $appointments,
            'appointments_count' => $appointments->count(),
            'next_appointment_date' => $appointments->where('date', '>', now())->first('date'),
            'transactions_sum' => $this->payments->sum('amount')
        ];
    }

    function status(){
        if(!$this->is_active) return Status::SUSPENDED->value;
        return Status::ACTIVE->value;
    }
}
