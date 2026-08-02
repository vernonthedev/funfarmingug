<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(Request $request)
    {
        // dd($request->all());

        $validatedData = $request->validate([
            'name' => 'required',
            'phoneNumber' => 'required',
            'message' => 'required',
            'email' => 'nullable|email',
            'inquireType' => 'nullable|string'
        ]);

        $contact = new Contact();
        $contact->name = $validatedData['name'];
        $contact->email = $validatedData['email'];
        $contact->phoneNumber = $validatedData['phoneNumber'];
        $contact->inquireType = $validatedData['inquireType'];
        $contact->message = $validatedData['message'];

        if (!$contact->save()) {
            // Handle save failure
            return redirect()->back()->with('error', 'Failed To Send Contact Info.');
        }

        return redirect()->back()->with('success', 'Contact Info Received Successfully.');
    }
    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        //
    }
}
