<?php

namespace App\Http\Controllers;

use App\Http\Resources\RequestResource;
use App\Models\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        // Count of requests
        $requestCount = Request::select()->count();

        // Count of users
        $userCount = User::select()->count();

        // Query to get the latest 5 users
        $latestUsers = User::orderBy('created_at', 'desc')->take(4)->get();

        // Query to get the latest 5 requests based on user role
        $query = Request::query(); // main query string
        if(Auth::user()->role === "purchaser"){
            $latestRequests = $query
                ->where("status", "accepted")
                ->orderBy("created_at", "desc")
                ->take(4)
                ->get();
        } elseif(Auth::user()->role === "requester"){
            $latestRequests = $query
                ->where("user_id", Auth::user()->id)
                ->orderBy("created_at", "desc")
                ->take(4)
                ->get();
        } elseif(Auth::user()->role === "admin" || Auth::user()->role === "treasury"){
            $latestRequests = $query
            ->orderBy("created_at", "desc")
            ->take(4)
            ->get();
        }

        return inertia('Dashboard', [
            "latestRequests" => $latestRequests,
            'latestUsers' => $latestUsers,
            'requestCount' => $requestCount,
            'userCount' => $userCount,
        ]);
    }
}
