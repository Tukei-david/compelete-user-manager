<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use App\Http\Requests\ResetPasswordRequest;

class ResetPasswordController extends Controller
{
    public function reset(ResetPasswordRequest $request)
    {
        $response = $this->broker()->reset(
            $this->credentials($request), function ($user, $password) {
                $this->resetPassWord($user, $password);
            }
        );

        return $response === Password::PASSWORD_RESET
                ? $this->sendResetResponse($request, $response)
                : $this->sendResetFailedResponse($request, $response);
    }

    protected function credentials(Request $request)
    {
        return $request->only(
            'email', 'password', 'password_confirmation', 'token'
        );
    }

    protected function resetPassWord($user, $password)
    {
        $user->password = Hash::make($password);

        $user->setRememberToken(Str::random(60));

        $user->save();
    }

    public function broker()
    {
        return Password::broker();
    }

    protected function sendResetResponse(Request $request, $status)
    {
        return response()->json([
            'message' => 'Password reset succeeded',
            'response' => $status
        ], 200);
    }

    protected function sendResetFailedResponse(Request $request, $status)
    {
        return response()->json([
            'message' => 'Password reset failed',
            'response' => $status
        ], 500);
    }
}
