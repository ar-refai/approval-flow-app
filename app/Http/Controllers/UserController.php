<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // sort by
        $sortField = request("sort_field", "id");
        $sortDirection = request("sort_direction", "desc");
        $query = User::query(); // main query string
        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }

            $users = $query
                ->orderBy($sortField, $sortDirection)
                ->paginate(10);

        return inertia('Users/Index', [
            "users" =>  UserResource::collection($users),
            "`queryParams`" =>  request()->query() ?: null,
            "success" => session("success")
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Users/Create', []);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();
        $data['password'] = bcrypt($data['password']);
        $request = User::create($data);

        // Redirect to the intended route after processing the form submission
        return to_route('user.index')->with("success", "The user was created successfully!");

    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return inertia('Users/Edit', [
            'user' => new UserResource($user),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->validated();
        $user->update($data);
        return to_route('user.index')
                ->with("success", "The user \"$user->name\" was updated successfully");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $name = $user->name;
        $user->delete();
        return to_route('user.index')
            ->with('success', "User \"$name\" was deleted");

    }
}
