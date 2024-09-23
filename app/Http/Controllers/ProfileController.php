<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateProfileIntroController;
use App\Http\Resources\ProfileResource;
use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    //
    public function updateIntro(UpdateProfileIntroController $request, Profile $profile) {
        $data = $request->validated();

        $data['user_id'] = auth()->id();

        // Check if the authenticated user is updating their own profile
        if ($profile->user_id !== $data['user_id']) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }
        

        $profile->update($data);

        return new ProfileResource($profile);
    }
}
