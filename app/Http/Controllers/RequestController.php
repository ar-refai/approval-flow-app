<?php

namespace App\Http\Controllers;

use App\Http\Resources\RequestResource;
use App\Models\Request;
use App\Http\Requests\StoreRequestRequest;
use App\Http\Requests\UpdateRequestRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class RequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // sort by
        $sortField = request("sort_field", "created_at");
        $sortDirection = request("sort_direction", "desc");
        $query = Request::query(); // main query string
        if (request("name")) {
            $query->where("item_name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }

        // Fetch paginated requests using the $query variable
        $requests = $query
            ->orderBy($sortField, $sortDirection)
            ->paginate(10);

        return inertia('Requests/Index', [
            "requests" =>  RequestResource::collection($requests),
            "queryParams" =>  request()->query() ?: null,
            "success" => session("success")
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return inertia('Requests/Create', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequestRequest $request)
    {
        // Validate the incoming request data
        $data = $request->validated();
        $data["user_id"] = Auth::user()->id;

        // Process the validated data (you can save it to the database, etc.)
        // For example, if you want to create a new request record:
        $request = Request::create($data);
        // Redirect to the intended route after processing the form submission
        return to_route('request.index')->with("success", "The request was created successfully!");
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
        return inertia('requset/edit',[
            "request" => new RequestResource($request),
        ]);
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
        $name = $request->item_name;
        $request->delete();
        return to_route('request.index')
            ->with('success', "Request \"$name\" was deleted");
    }
}
