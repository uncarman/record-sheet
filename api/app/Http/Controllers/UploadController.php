<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        $this->validate($request, [
            'file' => ['required', 'file']
        ]);

        $path = $request->file('file')->store('public');

        return response([
            'url' => Storage::url($path)
        ]);
    }
}
