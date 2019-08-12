<?php

namespace App\Http\Middleware;

use Closure;

class BasicAuth
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $authorization = $request->header('Authorization');
//        if (!$authorization && strpos($authorization, 'Basic ') == false) {
//            abort(401);
//        }

//        $auth = explode(' ', $authorization);
        $credential = explode(':', base64_decode($authorization));

        if (empty($credential)) {
            abort(401);
        }

        if ($credential[0] == config('auth.basic.username') && $credential[1] == config('auth.basic.password')) {
            return $next($request);
        }

        abort(401);
    }
}
