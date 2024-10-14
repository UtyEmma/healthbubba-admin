<?php

namespace App\Http\Controllers;

use App\Http\Resources\PractitionerResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HealthPractitionerController extends Controller {
    
    function index(){
        $users = PractitionerResource::collection(User::whereType('doctor')->withSerialNo()->paginate());
        return Inertia::render('HealthPractitioners', compact('users'));
    }

}