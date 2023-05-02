<?php declare(strict_types=1);

namespace App\Http\Controllers\Checkout;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class IndexController extends Controller
{
    public function index()
    {
        return view(
            'checkout',
            [
                'javascript' => [],
            ]
        );
    }

    public function items()
    {
        return [
            [
                'id' => 1,
                'name' => 'Test Product',
                'price' => 5,
                'qty' => 1,
                'rowprice' => 5
            ],
            [
                'id' => 6,
                'name' => 'Test Product 2',
                'price' => 1.45,
                'qty' => 2,
                'rowprice' => 1.45 * 2
            ],
        ];
    }

    public function pay(Request $request)
    {
        $validation = [
            'email' => 'email',
            'name' => 'min:5',
            'card' => 'luhn'
        ];

        $validator = Validator::make($request->json()->all(), $validation);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->toArray()], 400);
        } else {
            return response('', 200);
        }
    }
}
