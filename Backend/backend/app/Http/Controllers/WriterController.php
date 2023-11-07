<?php

namespace App\Http\Controllers;

use App\Models\Writer;
use Illuminate\Http\Request;

class WriterController extends Controller
{
    //
    public function index()
    {
        $writers = Writer::all();
        // az összes rekord lekérdezése
        return response()->json($writers);
    }
    public function store(Request $request)
    {
        //ellenőrizd az adatokat, például a beérkezett kéréseket
        $record = new Writer();
        $record->nev = $request->nev;
        $record->szul = $request->szul;
        $record->save();
        //return response()->json($writer);
    }
    public function show($id)
    {
        $writers = Writer::find($id);
    }
    public function destroy($id)
    {
        Writer::find($id)->delete();
        //return redirect('/writer/list');
    }
    public function update(Request $request, $id)
    {
        $writer = Writer::find($id);
        $writer->nev = $request->nev;
        $writer->szul = $request->szul;
        $writer->save();
        //return redirect('/writer/list');
    }
}
