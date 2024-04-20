<?php

namespace App\Http\Controllers;

use App\Http\Resources\RequestResource;
use App\Models\Request;
use App\Http\Requests\StoreRequestRequest;
use App\Http\Requests\UpdateRequestRequest;
use App\Models\User;

class RequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // sort by
        $sortField = request("sort_field" , "created_at");
        $sortDirection = request("sort_direction" , "desc");
        $query = Request::query(); // main query string
        if (request("name")) {
            $query->where("item_name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }

        // Fetch paginated requests using the $query variable
        $requests = $query
                ->orderBy($sortField , $sortDirection)
                ->paginate(10);

        return inertia('Requests/Index', [
            "requests" =>  RequestResource::collection($requests),
            "queryParams" =>  request()->query() ?: null
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequestRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequestRequest $requestUpdate, Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //
    }
}
