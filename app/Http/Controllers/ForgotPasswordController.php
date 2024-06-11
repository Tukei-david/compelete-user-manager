<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForgotPasswordRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class ForgotPasswordController extends Controller
{
    public function sendResetLinkEmail(ForgotPasswordRequest $request)
    {
        $response = $this->broker()->sendResetLink(
            $request->only('email')
        );

        return $response === Password::RESET_LINK_SENT
                ? $this->sendResetLinkResponse($request, $response)
                : $this->sendResetlinkFailedResponse($request, $response);

    }

    public function broker()
    {
        return Password::broker();
    }

    protected function sendResetLinkResponse(Request $request, $status)
    {
        return response()->json([
            'message' => 'Email sent',
            'response' => $status
        ], 200);
    }

    protected function sendResetlinkFailedResponse(Request $request, $status)
    {
        return response()->json([
            'message' => 'Failed to send mail',
            'response' => $status
        ], 500);
    }
}
