@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <chat-head :usersNumber="users"></chat-head>
                    <div class="panel-body">
                        <chat-body :messages="messages"></chat-body>

                        <chat-foot @msgSend="addMsg"></chat-foot>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection